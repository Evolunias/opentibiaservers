import HighrateEmpirebrHighscoresKeywordPage, { generateMetadata } from './highrate-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEmpirebrHighscoresKeywordPage />;
}
