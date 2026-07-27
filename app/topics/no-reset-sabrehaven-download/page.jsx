import NoResetSabrehavenDownloadKeywordPage, { generateMetadata } from './no-reset-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenDownloadKeywordPage />;
}
