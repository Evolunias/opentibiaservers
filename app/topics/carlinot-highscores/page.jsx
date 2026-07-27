import CarlinotHighscoresKeywordPage, { generateMetadata } from './carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotHighscoresKeywordPage />;
}
