import NoResetNtoStarHighscoresKeywordPage, { generateMetadata } from './no-reset-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarHighscoresKeywordPage />;
}
