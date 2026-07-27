import LowrateClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './lowrate-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassickDrakoriaHighscoresKeywordPage />;
}
