import EvoluniaHighscoresKeywordPage, { generateMetadata } from './evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaHighscoresKeywordPage />;
}
