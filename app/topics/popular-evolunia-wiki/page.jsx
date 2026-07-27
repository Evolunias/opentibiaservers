import PopularEvoluniaWikiKeywordPage, { generateMetadata } from './popular-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaWikiKeywordPage />;
}
