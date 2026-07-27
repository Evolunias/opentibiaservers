import OfficialEvoleraHighscoresKeywordPage, { generateMetadata } from './official-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraHighscoresKeywordPage />;
}
