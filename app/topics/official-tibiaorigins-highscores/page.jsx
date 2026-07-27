import OfficialTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './official-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsHighscoresKeywordPage />;
}
