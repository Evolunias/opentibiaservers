import ActiveNtoStarDownloadKeywordPage, { generateMetadata } from './active-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarDownloadKeywordPage />;
}
