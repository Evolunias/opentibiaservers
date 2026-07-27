import OfficialTibijkaHighscoresKeywordPage, { generateMetadata } from './official-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaHighscoresKeywordPage />;
}
