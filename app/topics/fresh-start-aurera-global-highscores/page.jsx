import FreshStartAureraGlobalHighscoresKeywordPage, { generateMetadata } from './fresh-start-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAureraGlobalHighscoresKeywordPage />;
}
