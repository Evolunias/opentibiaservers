import LowrateTibiaraDownloadKeywordPage, { generateMetadata } from './lowrate-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraDownloadKeywordPage />;
}
