import OfficialUnlineHighscoresKeywordPage, { generateMetadata } from './official-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineHighscoresKeywordPage />;
}
