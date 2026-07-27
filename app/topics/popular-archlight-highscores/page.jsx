import PopularArchlightHighscoresKeywordPage, { generateMetadata } from './popular-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightHighscoresKeywordPage />;
}
