import AlasteraDownloadKeywordPage, { generateMetadata } from './alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraDownloadKeywordPage />;
}
