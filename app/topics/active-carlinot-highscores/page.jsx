import ActiveCarlinotHighscoresKeywordPage, { generateMetadata } from './active-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotHighscoresKeywordPage />;
}
