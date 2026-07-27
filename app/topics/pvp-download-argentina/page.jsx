import PvpDownloadArgentinaKeywordPage, { generateMetadata } from './pvp-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadArgentinaKeywordPage />;
}
