import UnlineHighscoresKeywordPage, { generateMetadata } from './unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineHighscoresKeywordPage />;
}
