import NewSeasonEmpirebrKeywordPage, { generateMetadata } from './new-season-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrKeywordPage />;
}
