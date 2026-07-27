import FreshStartRubinotHighscoresKeywordPage, { generateMetadata } from './fresh-start-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotHighscoresKeywordPage />;
}
