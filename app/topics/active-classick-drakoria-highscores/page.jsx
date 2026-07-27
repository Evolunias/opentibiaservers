import ActiveClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './active-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaHighscoresKeywordPage />;
}
