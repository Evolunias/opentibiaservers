import LowrateAlasteraHighscoresKeywordPage, { generateMetadata } from './lowrate-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraHighscoresKeywordPage />;
}
