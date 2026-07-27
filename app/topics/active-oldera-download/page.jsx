import ActiveOlderaDownloadKeywordPage, { generateMetadata } from './active-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaDownloadKeywordPage />;
}
