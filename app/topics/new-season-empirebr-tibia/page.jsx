import NewSeasonEmpirebrTibiaKeywordPage, { generateMetadata } from './new-season-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrTibiaKeywordPage />;
}
