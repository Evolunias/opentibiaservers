import NewOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './new-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaHighscoresKeywordPage />;
}
