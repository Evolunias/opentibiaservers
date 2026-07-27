import ActiveArchlightHighscoresKeywordPage, { generateMetadata } from './active-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightHighscoresKeywordPage />;
}
