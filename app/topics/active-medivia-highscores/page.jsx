import ActiveMediviaHighscoresKeywordPage, { generateMetadata } from './active-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaHighscoresKeywordPage />;
}
