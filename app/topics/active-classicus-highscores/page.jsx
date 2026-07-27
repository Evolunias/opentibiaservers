import ActiveClassicusHighscoresKeywordPage, { generateMetadata } from './active-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusHighscoresKeywordPage />;
}
