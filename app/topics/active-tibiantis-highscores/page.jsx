import ActiveTibiantisHighscoresKeywordPage, { generateMetadata } from './active-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisHighscoresKeywordPage />;
}
