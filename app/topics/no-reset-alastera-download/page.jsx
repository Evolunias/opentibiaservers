import NoResetAlasteraDownloadKeywordPage, { generateMetadata } from './no-reset-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraDownloadKeywordPage />;
}
