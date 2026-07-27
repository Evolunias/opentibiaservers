import OtlandServerGalaDownloadKeywordPage, { generateMetadata } from './otland-server-gala-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaDownloadKeywordPage />;
}
