import CurrentMistOfDeathForumKeywordPage, { generateMetadata } from './current-mist-of-death-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMistOfDeathForumKeywordPage />;
}
