import NewTibiaoriginsDownloadKeywordPage, { generateMetadata } from './new-tibiaorigins-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsDownloadKeywordPage />;
}
