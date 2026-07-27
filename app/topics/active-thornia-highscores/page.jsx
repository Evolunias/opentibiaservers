import ActiveThorniaHighscoresKeywordPage, { generateMetadata } from './active-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaHighscoresKeywordPage />;
}
