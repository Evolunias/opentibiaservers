import TopRealestaHighscoresKeywordPage, { generateMetadata } from './top-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaHighscoresKeywordPage />;
}
