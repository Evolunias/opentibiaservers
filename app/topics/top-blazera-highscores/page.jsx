import TopBlazeraHighscoresKeywordPage, { generateMetadata } from './top-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraHighscoresKeywordPage />;
}
