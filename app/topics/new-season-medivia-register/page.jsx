import NewSeasonMediviaRegisterKeywordPage, { generateMetadata } from './new-season-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaRegisterKeywordPage />;
}
