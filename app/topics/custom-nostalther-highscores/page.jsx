import CustomNostaltherHighscoresKeywordPage, { generateMetadata } from './custom-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherHighscoresKeywordPage />;
}
