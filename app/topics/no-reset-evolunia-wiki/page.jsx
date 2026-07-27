import NoResetEvoluniaWikiKeywordPage, { generateMetadata } from './no-reset-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaWikiKeywordPage />;
}
