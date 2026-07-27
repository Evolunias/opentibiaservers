import NewSeasonEmpirebrServerKeywordPage, { generateMetadata } from './new-season-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrServerKeywordPage />;
}
