import NewEvoluniaHighscoresKeywordPage, { generateMetadata } from './new-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaHighscoresKeywordPage />;
}
