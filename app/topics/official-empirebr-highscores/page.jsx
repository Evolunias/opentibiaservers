import OfficialEmpirebrHighscoresKeywordPage, { generateMetadata } from './official-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrHighscoresKeywordPage />;
}
