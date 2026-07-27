import NewSeasonEmpirebrWikiKeywordPage, { generateMetadata } from './new-season-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrWikiKeywordPage />;
}
