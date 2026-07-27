import TopTibiascapeDownloadKeywordPage, { generateMetadata } from './top-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeDownloadKeywordPage />;
}
