import OfficialDemolidoresDownloadKeywordPage, { generateMetadata } from './official-demolidores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresDownloadKeywordPage />;
}
