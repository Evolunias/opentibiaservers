import TopDemolidoresHighscoresKeywordPage, { generateMetadata } from './top-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresHighscoresKeywordPage />;
}
