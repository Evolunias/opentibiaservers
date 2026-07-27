import TopRuthlessChaosDownloadKeywordPage, { generateMetadata } from './top-ruthless-chaos-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosDownloadKeywordPage />;
}
