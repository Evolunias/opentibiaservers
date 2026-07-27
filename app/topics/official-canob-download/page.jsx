import OfficialCanobDownloadKeywordPage, { generateMetadata } from './official-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobDownloadKeywordPage />;
}
