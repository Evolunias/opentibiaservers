import LowrateThorniaDownloadKeywordPage, { generateMetadata } from './lowrate-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaDownloadKeywordPage />;
}
