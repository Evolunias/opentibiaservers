import FreshStartInfernalOtWikiKeywordPage, { generateMetadata } from './fresh-start-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartInfernalOtWikiKeywordPage />;
}
