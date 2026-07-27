import OfficialLumineraHighscoresKeywordPage, { generateMetadata } from './official-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraHighscoresKeywordPage />;
}
