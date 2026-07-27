import OfficialArchlightHighscoresKeywordPage, { generateMetadata } from './official-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightHighscoresKeywordPage />;
}
