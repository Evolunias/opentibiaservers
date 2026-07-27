import NewSeasonMiracleKeywordPage, { generateMetadata } from './new-season-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleKeywordPage />;
}
