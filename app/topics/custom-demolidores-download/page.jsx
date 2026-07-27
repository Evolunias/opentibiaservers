import CustomDemolidoresDownloadKeywordPage, { generateMetadata } from './custom-demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresDownloadKeywordPage />;
}
