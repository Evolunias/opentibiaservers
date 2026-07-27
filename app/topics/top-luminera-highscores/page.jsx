import TopLumineraHighscoresKeywordPage, { generateMetadata } from './top-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraHighscoresKeywordPage />;
}
