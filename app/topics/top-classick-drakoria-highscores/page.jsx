import TopClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './top-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaHighscoresKeywordPage />;
}
