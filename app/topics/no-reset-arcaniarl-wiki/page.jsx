import NoResetArcaniarlWikiKeywordPage, { generateMetadata } from './no-reset-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlWikiKeywordPage />;
}
