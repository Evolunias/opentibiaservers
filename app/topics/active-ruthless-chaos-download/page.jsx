import ActiveRuthlessChaosDownloadKeywordPage, { generateMetadata } from './active-ruthless-chaos-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosDownloadKeywordPage />;
}
