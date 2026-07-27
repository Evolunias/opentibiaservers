import TopThaisotHighscoresKeywordPage, { generateMetadata } from './top-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotHighscoresKeywordPage />;
}
