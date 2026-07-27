import OfficialKasteriaDownloadKeywordPage, { generateMetadata } from './official-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaDownloadKeywordPage />;
}
