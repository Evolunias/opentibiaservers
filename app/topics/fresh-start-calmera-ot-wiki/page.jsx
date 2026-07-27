import FreshStartCalmeraOtWikiKeywordPage, { generateMetadata } from './fresh-start-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCalmeraOtWikiKeywordPage />;
}
