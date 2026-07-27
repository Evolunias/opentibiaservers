import OfficialLumineraDownloadKeywordPage, { generateMetadata } from './official-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraDownloadKeywordPage />;
}
