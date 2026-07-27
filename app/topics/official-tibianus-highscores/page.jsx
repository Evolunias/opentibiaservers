import OfficialTibianusHighscoresKeywordPage, { generateMetadata } from './official-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusHighscoresKeywordPage />;
}
