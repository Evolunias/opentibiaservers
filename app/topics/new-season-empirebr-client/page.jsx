import NewSeasonEmpirebrClientKeywordPage, { generateMetadata } from './new-season-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrClientKeywordPage />;
}
