import CurrentEmpirebrHighscoresKeywordPage, { generateMetadata } from './current-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrHighscoresKeywordPage />;
}
