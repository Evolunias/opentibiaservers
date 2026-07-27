import TopTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './top-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsHighscoresKeywordPage />;
}
