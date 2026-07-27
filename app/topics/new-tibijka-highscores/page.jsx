import NewTibijkaHighscoresKeywordPage, { generateMetadata } from './new-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaHighscoresKeywordPage />;
}
