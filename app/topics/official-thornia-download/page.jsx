import OfficialThorniaDownloadKeywordPage, { generateMetadata } from './official-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaDownloadKeywordPage />;
}
