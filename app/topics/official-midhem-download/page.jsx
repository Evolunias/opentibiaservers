import OfficialMidhemDownloadKeywordPage, { generateMetadata } from './official-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemDownloadKeywordPage />;
}
