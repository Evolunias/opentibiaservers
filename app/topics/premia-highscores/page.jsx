import PremiaHighscoresKeywordPage, { generateMetadata } from './premia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaHighscoresKeywordPage />;
}
