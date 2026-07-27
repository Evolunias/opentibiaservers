import NewDemolidoresDownloadKeywordPage, { generateMetadata } from './new-demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresDownloadKeywordPage />;
}
