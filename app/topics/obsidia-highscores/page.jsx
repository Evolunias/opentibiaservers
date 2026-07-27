import ObsidiaHighscoresKeywordPage, { generateMetadata } from './obsidia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaHighscoresKeywordPage />;
}
