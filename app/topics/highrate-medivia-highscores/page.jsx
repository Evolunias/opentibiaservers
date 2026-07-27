import HighrateMediviaHighscoresKeywordPage, { generateMetadata } from './highrate-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaHighscoresKeywordPage />;
}
