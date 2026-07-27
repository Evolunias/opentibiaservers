import NewSeasonEmpirebrWebsiteKeywordPage, { generateMetadata } from './new-season-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrWebsiteKeywordPage />;
}
