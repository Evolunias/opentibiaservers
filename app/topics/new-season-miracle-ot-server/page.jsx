import NewSeasonMiracleOtServerKeywordPage, { generateMetadata } from './new-season-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleOtServerKeywordPage />;
}
