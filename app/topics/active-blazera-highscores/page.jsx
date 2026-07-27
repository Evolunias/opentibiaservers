import ActiveBlazeraHighscoresKeywordPage, { generateMetadata } from './active-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraHighscoresKeywordPage />;
}
