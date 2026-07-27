import OfficialBlazeraHighscoresKeywordPage, { generateMetadata } from './official-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraHighscoresKeywordPage />;
}
