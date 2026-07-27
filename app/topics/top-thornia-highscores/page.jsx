import TopThorniaHighscoresKeywordPage, { generateMetadata } from './top-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaHighscoresKeywordPage />;
}
