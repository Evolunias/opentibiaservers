import ActiveSabrehavenDownloadKeywordPage, { generateMetadata } from './active-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenDownloadKeywordPage />;
}
