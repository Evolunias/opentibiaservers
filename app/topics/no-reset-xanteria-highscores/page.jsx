import NoResetXanteriaHighscoresKeywordPage, { generateMetadata } from './no-reset-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaHighscoresKeywordPage />;
}
