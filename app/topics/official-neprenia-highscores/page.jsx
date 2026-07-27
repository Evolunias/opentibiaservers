import OfficialNepreniaHighscoresKeywordPage, { generateMetadata } from './official-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaHighscoresKeywordPage />;
}
