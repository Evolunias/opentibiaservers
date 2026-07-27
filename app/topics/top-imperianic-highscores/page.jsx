import TopImperianicHighscoresKeywordPage, { generateMetadata } from './top-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicHighscoresKeywordPage />;
}
