import TopSabrehavenDownloadKeywordPage, { generateMetadata } from './top-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenDownloadKeywordPage />;
}
