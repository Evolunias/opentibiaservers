import ActiveTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './active-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsHighscoresKeywordPage />;
}
