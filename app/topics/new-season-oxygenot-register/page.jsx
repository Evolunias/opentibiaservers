import NewSeasonOxygenotRegisterKeywordPage, { generateMetadata } from './new-season-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotRegisterKeywordPage />;
}
