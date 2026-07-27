import BestSabrehavenDownloadKeywordPage, { generateMetadata } from './best-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenDownloadKeywordPage />;
}
