import BestSerenityDownloadKeywordPage, { generateMetadata } from './best-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityDownloadKeywordPage />;
}
