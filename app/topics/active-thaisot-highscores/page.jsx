import ActiveThaisotHighscoresKeywordPage, { generateMetadata } from './active-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotHighscoresKeywordPage />;
}
