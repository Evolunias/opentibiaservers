import TopCanobHighscoresKeywordPage, { generateMetadata } from './top-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobHighscoresKeywordPage />;
}
