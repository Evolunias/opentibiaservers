import BestTibiaretroHighscoresKeywordPage, { generateMetadata } from './best-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroHighscoresKeywordPage />;
}
