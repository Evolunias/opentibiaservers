import NewSeasonKasteriaRegisterKeywordPage, { generateMetadata } from './new-season-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaRegisterKeywordPage />;
}
