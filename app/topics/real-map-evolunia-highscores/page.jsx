import RealMapEvoluniaHighscoresKeywordPage, { generateMetadata } from './real-map-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaHighscoresKeywordPage />;
}
