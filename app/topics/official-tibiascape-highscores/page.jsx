import OfficialTibiascapeHighscoresKeywordPage, { generateMetadata } from './official-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeHighscoresKeywordPage />;
}
