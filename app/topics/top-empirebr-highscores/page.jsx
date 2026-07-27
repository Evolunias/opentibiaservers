import TopEmpirebrHighscoresKeywordPage, { generateMetadata } from './top-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrHighscoresKeywordPage />;
}
