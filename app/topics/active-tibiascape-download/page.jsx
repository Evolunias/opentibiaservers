import ActiveTibiascapeDownloadKeywordPage, { generateMetadata } from './active-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeDownloadKeywordPage />;
}
