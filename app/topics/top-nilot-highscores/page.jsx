import TopNilotHighscoresKeywordPage, { generateMetadata } from './top-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotHighscoresKeywordPage />;
}
