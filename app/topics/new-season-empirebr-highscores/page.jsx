import NewSeasonEmpirebrHighscoresKeywordPage, { generateMetadata } from './new-season-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrHighscoresKeywordPage />;
}
