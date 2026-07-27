import NewSeasonMiracleLoginKeywordPage, { generateMetadata } from './new-season-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleLoginKeywordPage />;
}
