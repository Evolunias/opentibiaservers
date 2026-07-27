import KasteriaHighscoresKeywordPage, { generateMetadata } from './kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaHighscoresKeywordPage />;
}
