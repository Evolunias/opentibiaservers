import ActiveRubinotDownloadKeywordPage, { generateMetadata } from './active-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotDownloadKeywordPage />;
}
