import LowrateEmpirebrHighscoresKeywordPage, { generateMetadata } from './lowrate-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrHighscoresKeywordPage />;
}
