import GuardiaHighscoresKeywordPage, { generateMetadata } from './guardia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaHighscoresKeywordPage />;
}
