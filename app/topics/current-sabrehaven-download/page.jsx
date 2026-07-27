import CurrentSabrehavenDownloadKeywordPage, { generateMetadata } from './current-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenDownloadKeywordPage />;
}
