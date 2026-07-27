import BestXanteriaDownloadKeywordPage, { generateMetadata } from './best-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaDownloadKeywordPage />;
}
