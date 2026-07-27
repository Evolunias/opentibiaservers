import NewSabrehavenDownloadKeywordPage, { generateMetadata } from './new-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenDownloadKeywordPage />;
}
