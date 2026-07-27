import NewSeasonMiracleOtKeywordPage, { generateMetadata } from './new-season-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleOtKeywordPage />;
}
