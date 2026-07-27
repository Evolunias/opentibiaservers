import OfficialCarlinotHighscoresKeywordPage, { generateMetadata } from './official-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotHighscoresKeywordPage />;
}
