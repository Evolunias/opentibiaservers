import BestEmpirebrHighscoresKeywordPage, { generateMetadata } from './best-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrHighscoresKeywordPage />;
}
