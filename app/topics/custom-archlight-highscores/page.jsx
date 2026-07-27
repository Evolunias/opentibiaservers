import CustomArchlightHighscoresKeywordPage, { generateMetadata } from './custom-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightHighscoresKeywordPage />;
}
