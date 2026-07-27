import ActiveAlasteraDownloadKeywordPage, { generateMetadata } from './active-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraDownloadKeywordPage />;
}
