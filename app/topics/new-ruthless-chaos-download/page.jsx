import NewRuthlessChaosDownloadKeywordPage, { generateMetadata } from './new-ruthless-chaos-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosDownloadKeywordPage />;
}
