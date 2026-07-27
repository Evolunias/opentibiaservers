import LowrateTibiascapeDownloadKeywordPage, { generateMetadata } from './lowrate-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeDownloadKeywordPage />;
}
