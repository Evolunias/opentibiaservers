import LowrateBlazeraHighscoresKeywordPage, { generateMetadata } from './lowrate-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraHighscoresKeywordPage />;
}
