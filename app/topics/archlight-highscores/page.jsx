import ArchlightHighscoresKeywordPage, { generateMetadata } from './archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightHighscoresKeywordPage />;
}
