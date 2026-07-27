import ActiveXanteriaHighscoresKeywordPage, { generateMetadata } from './active-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaHighscoresKeywordPage />;
}
