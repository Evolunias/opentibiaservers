import NewSeasonEmpirebrOtsKeywordPage, { generateMetadata } from './new-season-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrOtsKeywordPage />;
}
