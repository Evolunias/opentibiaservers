import NewRealeraDownloadKeywordPage, { generateMetadata } from './new-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraDownloadKeywordPage />;
}
