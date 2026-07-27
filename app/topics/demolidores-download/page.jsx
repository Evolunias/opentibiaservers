import DemolidoresDownloadKeywordPage, { generateMetadata } from './demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresDownloadKeywordPage />;
}
