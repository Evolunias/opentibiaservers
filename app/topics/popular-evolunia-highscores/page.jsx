import PopularEvoluniaHighscoresKeywordPage, { generateMetadata } from './popular-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaHighscoresKeywordPage />;
}
