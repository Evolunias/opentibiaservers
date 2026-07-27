import NewTibiascapeDownloadKeywordPage, { generateMetadata } from './new-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeDownloadKeywordPage />;
}
