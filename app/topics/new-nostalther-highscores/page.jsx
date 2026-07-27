import NewNostaltherHighscoresKeywordPage, { generateMetadata } from './new-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherHighscoresKeywordPage />;
}
