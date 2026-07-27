import OfficialEvoluniaHighscoresKeywordPage, { generateMetadata } from './official-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaHighscoresKeywordPage />;
}
