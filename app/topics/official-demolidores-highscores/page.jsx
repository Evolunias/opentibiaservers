import OfficialDemolidoresHighscoresKeywordPage, { generateMetadata } from './official-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresHighscoresKeywordPage />;
}
