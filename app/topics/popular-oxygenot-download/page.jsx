import PopularOxygenotDownloadKeywordPage, { generateMetadata } from './popular-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotDownloadKeywordPage />;
}
