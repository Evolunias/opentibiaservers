import TopUnlineHighscoresKeywordPage, { generateMetadata } from './top-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineHighscoresKeywordPage />;
}
