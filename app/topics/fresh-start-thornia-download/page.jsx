import FreshStartThorniaDownloadKeywordPage, { generateMetadata } from './fresh-start-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaDownloadKeywordPage />;
}
