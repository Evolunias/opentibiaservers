import FreshStartArchlightHighscoresKeywordPage, { generateMetadata } from './fresh-start-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightHighscoresKeywordPage />;
}
