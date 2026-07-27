import BestThorniaDownloadKeywordPage, { generateMetadata } from './best-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaDownloadKeywordPage />;
}
