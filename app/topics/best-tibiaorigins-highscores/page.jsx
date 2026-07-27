import BestTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './best-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaoriginsHighscoresKeywordPage />;
}
