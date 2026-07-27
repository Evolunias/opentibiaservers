import CurrentArchlightHighscoresKeywordPage, { generateMetadata } from './current-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightHighscoresKeywordPage />;
}
