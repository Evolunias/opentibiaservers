import NoResetTibiantisHighscoresKeywordPage, { generateMetadata } from './no-reset-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisHighscoresKeywordPage />;
}
