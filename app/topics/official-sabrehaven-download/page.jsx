import OfficialSabrehavenDownloadKeywordPage, { generateMetadata } from './official-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenDownloadKeywordPage />;
}
