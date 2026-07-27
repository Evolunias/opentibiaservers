import NewUnlineHighscoresKeywordPage, { generateMetadata } from './new-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineHighscoresKeywordPage />;
}
