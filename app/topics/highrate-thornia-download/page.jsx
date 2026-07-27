import HighrateThorniaDownloadKeywordPage, { generateMetadata } from './highrate-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaDownloadKeywordPage />;
}
