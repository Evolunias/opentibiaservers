import DemolidoresHighscoresKeywordPage, { generateMetadata } from './demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresHighscoresKeywordPage />;
}
