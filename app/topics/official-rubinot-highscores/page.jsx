import OfficialRubinotHighscoresKeywordPage, { generateMetadata } from './official-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotHighscoresKeywordPage />;
}
