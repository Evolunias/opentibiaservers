import ActiveLumineraDownloadKeywordPage, { generateMetadata } from './active-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraDownloadKeywordPage />;
}
