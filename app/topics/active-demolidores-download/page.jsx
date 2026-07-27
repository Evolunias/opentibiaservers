import ActiveDemolidoresDownloadKeywordPage, { generateMetadata } from './active-demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresDownloadKeywordPage />;
}
