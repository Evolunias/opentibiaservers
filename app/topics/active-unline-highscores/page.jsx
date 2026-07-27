import ActiveUnlineHighscoresKeywordPage, { generateMetadata } from './active-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineHighscoresKeywordPage />;
}
