import EvoluniaWikiKeywordPage, { generateMetadata } from './evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaWikiKeywordPage />;
}
