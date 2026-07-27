import FreshStartZuneraOtWikiKeywordPage, { generateMetadata } from './fresh-start-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartZuneraOtWikiKeywordPage />;
}
