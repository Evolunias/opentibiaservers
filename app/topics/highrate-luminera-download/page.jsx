import HighrateLumineraDownloadKeywordPage, { generateMetadata } from './highrate-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraDownloadKeywordPage />;
}
