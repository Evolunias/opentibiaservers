import OfficialClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './official-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaHighscoresKeywordPage />;
}
