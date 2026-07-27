import ActiveEvoluniaWikiKeywordPage, { generateMetadata } from './active-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaWikiKeywordPage />;
}
