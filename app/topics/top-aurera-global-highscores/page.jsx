import TopAureraGlobalHighscoresKeywordPage, { generateMetadata } from './top-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalHighscoresKeywordPage />;
}
