import OfficialTibiantisHighscoresKeywordPage, { generateMetadata } from './official-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisHighscoresKeywordPage />;
}
