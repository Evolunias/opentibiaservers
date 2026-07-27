import RealMapEmpirebrHighscoresKeywordPage, { generateMetadata } from './real-map-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrHighscoresKeywordPage />;
}
