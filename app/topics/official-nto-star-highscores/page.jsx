import OfficialNtoStarHighscoresKeywordPage, { generateMetadata } from './official-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarHighscoresKeywordPage />;
}
