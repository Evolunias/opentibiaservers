import ActiveRealeraDownloadKeywordPage, { generateMetadata } from './active-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraDownloadKeywordPage />;
}
