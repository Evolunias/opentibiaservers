import NewSeasonCarlinotRegisterKeywordPage, { generateMetadata } from './new-season-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotRegisterKeywordPage />;
}
