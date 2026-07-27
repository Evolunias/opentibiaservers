import TopTibiaoriginsDownloadKeywordPage, { generateMetadata } from './top-tibiaorigins-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsDownloadKeywordPage />;
}
