import HighrateEvoluniaHighscoresKeywordPage, { generateMetadata } from './highrate-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaHighscoresKeywordPage />;
}
