import CelestaHighscoresKeywordPage, { generateMetadata } from './celesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaHighscoresKeywordPage />;
}
