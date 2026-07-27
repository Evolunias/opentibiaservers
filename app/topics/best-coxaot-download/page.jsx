import BestCoxaotDownloadKeywordPage, { generateMetadata } from './best-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotDownloadKeywordPage />;
}
