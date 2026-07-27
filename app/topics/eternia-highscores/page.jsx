import EterniaHighscoresKeywordPage, { generateMetadata } from './eternia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaHighscoresKeywordPage />;
}
