import NewRubinotHighscoresKeywordPage, { generateMetadata } from './new-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotHighscoresKeywordPage />;
}
