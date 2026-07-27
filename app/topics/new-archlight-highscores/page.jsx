import NewArchlightHighscoresKeywordPage, { generateMetadata } from './new-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightHighscoresKeywordPage />;
}
