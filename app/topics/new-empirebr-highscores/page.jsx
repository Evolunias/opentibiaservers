import NewEmpirebrHighscoresKeywordPage, { generateMetadata } from './new-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrHighscoresKeywordPage />;
}
