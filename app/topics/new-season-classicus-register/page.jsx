import NewSeasonClassicusRegisterKeywordPage, { generateMetadata } from './new-season-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusRegisterKeywordPage />;
}
