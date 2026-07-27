import SecuraHighscoresKeywordPage, { generateMetadata } from './secura-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraHighscoresKeywordPage />;
}
