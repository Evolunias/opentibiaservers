import FreshStartTibiascapeDownloadKeywordPage, { generateMetadata } from './fresh-start-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeDownloadKeywordPage />;
}
