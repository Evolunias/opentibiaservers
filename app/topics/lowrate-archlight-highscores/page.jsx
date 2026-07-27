import LowrateArchlightHighscoresKeywordPage, { generateMetadata } from './lowrate-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightHighscoresKeywordPage />;
}
