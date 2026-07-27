import PopularTibiantisDownloadKeywordPage, { generateMetadata } from './popular-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisDownloadKeywordPage />;
}
