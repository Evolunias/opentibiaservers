import NoResetEvoluniaHighscoresKeywordPage, { generateMetadata } from './no-reset-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaHighscoresKeywordPage />;
}
