import OfficialKasteriaHighscoresKeywordPage, { generateMetadata } from './official-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaHighscoresKeywordPage />;
}
