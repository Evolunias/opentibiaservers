import FreshStartSabrehavenDownloadKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenDownloadKeywordPage />;
}
