import NewCoxaotDownloadKeywordPage, { generateMetadata } from './new-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotDownloadKeywordPage />;
}
