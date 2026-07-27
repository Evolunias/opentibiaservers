import ActiveDemolidoresHighscoresKeywordPage, { generateMetadata } from './active-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresHighscoresKeywordPage />;
}
