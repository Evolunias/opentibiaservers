import TopCarlinotHighscoresKeywordPage, { generateMetadata } from './top-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotHighscoresKeywordPage />;
}
