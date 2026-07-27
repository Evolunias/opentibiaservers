import ActiveAlasteraHighscoresKeywordPage, { generateMetadata } from './active-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraHighscoresKeywordPage />;
}
