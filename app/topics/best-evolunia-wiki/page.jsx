import BestEvoluniaWikiKeywordPage, { generateMetadata } from './best-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaWikiKeywordPage />;
}
