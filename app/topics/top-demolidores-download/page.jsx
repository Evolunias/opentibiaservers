import TopDemolidoresDownloadKeywordPage, { generateMetadata } from './top-demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresDownloadKeywordPage />;
}
