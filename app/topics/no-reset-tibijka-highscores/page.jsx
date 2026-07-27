import NoResetTibijkaHighscoresKeywordPage, { generateMetadata } from './no-reset-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaHighscoresKeywordPage />;
}
