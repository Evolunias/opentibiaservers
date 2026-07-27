import TopMediviaHighscoresKeywordPage, { generateMetadata } from './top-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaHighscoresKeywordPage />;
}
