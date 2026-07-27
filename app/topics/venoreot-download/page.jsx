import VenoreotDownloadKeywordPage, { generateMetadata } from './venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotDownloadKeywordPage />;
}
