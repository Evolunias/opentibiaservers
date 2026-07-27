import TopEvoluniaHighscoresKeywordPage, { generateMetadata } from './top-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaHighscoresKeywordPage />;
}
