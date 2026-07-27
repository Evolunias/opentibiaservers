import PopularEmpirebrHighscoresKeywordPage, { generateMetadata } from './popular-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrHighscoresKeywordPage />;
}
