import CurrentTibiascapeDownloadKeywordPage, { generateMetadata } from './current-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeDownloadKeywordPage />;
}
