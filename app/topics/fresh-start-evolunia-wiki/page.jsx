import FreshStartEvoluniaWikiKeywordPage, { generateMetadata } from './fresh-start-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaWikiKeywordPage />;
}
