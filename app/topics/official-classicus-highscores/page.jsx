import OfficialClassicusHighscoresKeywordPage, { generateMetadata } from './official-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusHighscoresKeywordPage />;
}
