import PopularTibiascapeDownloadKeywordPage, { generateMetadata } from './popular-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeDownloadKeywordPage />;
}
