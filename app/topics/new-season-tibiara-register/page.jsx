import NewSeasonTibiaraRegisterKeywordPage, { generateMetadata } from './new-season-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraRegisterKeywordPage />;
}
