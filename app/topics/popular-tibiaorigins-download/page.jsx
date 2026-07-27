import PopularTibiaoriginsDownloadKeywordPage, { generateMetadata } from './popular-tibiaorigins-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsDownloadKeywordPage />;
}
