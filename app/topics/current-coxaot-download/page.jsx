import CurrentCoxaotDownloadKeywordPage, { generateMetadata } from './current-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotDownloadKeywordPage />;
}
