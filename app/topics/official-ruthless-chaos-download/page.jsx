import OfficialRuthlessChaosDownloadKeywordPage, { generateMetadata } from './official-ruthless-chaos-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosDownloadKeywordPage />;
}
