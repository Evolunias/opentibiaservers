import RealMapSerenityHighscoresKeywordPage, { generateMetadata } from './real-map-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityHighscoresKeywordPage />;
}
