import LowrateTibiantisHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisHighscoresKeywordPage />;
}
