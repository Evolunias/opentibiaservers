import BestImperianicDownloadKeywordPage, { generateMetadata } from './best-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicDownloadKeywordPage />;
}
