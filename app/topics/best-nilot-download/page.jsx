import BestNilotDownloadKeywordPage, { generateMetadata } from './best-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotDownloadKeywordPage />;
}
