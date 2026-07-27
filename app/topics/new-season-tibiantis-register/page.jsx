import NewSeasonTibiantisRegisterKeywordPage, { generateMetadata } from './new-season-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisRegisterKeywordPage />;
}
