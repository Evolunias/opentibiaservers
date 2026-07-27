import OfficialMediviaHighscoresKeywordPage, { generateMetadata } from './official-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaHighscoresKeywordPage />;
}
