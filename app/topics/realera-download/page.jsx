import RealeraDownloadKeywordPage, { generateMetadata } from './realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraDownloadKeywordPage />;
}
