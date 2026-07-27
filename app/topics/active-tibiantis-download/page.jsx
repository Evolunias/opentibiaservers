import ActiveTibiantisDownloadKeywordPage, { generateMetadata } from './active-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisDownloadKeywordPage />;
}
