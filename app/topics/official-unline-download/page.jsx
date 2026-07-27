import OfficialUnlineDownloadKeywordPage, { generateMetadata } from './official-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineDownloadKeywordPage />;
}
