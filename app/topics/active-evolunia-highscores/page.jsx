import ActiveEvoluniaHighscoresKeywordPage, { generateMetadata } from './active-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaHighscoresKeywordPage />;
}
