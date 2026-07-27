import LowrateMidhemHighscoresKeywordPage, { generateMetadata } from './lowrate-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemHighscoresKeywordPage />;
}
