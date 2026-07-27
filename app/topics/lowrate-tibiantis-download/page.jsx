import LowrateTibiantisDownloadKeywordPage, { generateMetadata } from './lowrate-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisDownloadKeywordPage />;
}
