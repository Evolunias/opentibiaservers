import NewEvoluniaWikiKeywordPage, { generateMetadata } from './new-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaWikiKeywordPage />;
}
