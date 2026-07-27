import TopArchlightHighscoresKeywordPage, { generateMetadata } from './top-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightHighscoresKeywordPage />;
}
