import TopRubinotHighscoresKeywordPage, { generateMetadata } from './top-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotHighscoresKeywordPage />;
}
