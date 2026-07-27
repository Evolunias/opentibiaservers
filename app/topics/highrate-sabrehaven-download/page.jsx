import HighrateSabrehavenDownloadKeywordPage, { generateMetadata } from './highrate-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenDownloadKeywordPage />;
}
