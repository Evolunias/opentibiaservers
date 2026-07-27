import FreshStartCarlinotWebsiteKeywordPage, { generateMetadata } from './fresh-start-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotWebsiteKeywordPage />;
}
