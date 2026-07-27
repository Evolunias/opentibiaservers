import BestSaintsotDownloadKeywordPage, { generateMetadata } from './best-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotDownloadKeywordPage />;
}
