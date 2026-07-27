import ActiveNostaltherHighscoresKeywordPage, { generateMetadata } from './active-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherHighscoresKeywordPage />;
}
