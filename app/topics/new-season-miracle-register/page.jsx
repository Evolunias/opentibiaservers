import NewSeasonMiracleRegisterKeywordPage, { generateMetadata } from './new-season-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleRegisterKeywordPage />;
}
