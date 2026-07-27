import FreshStartLumineraDownloadKeywordPage, { generateMetadata } from './fresh-start-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraDownloadKeywordPage />;
}
