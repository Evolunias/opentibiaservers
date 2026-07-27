import CurrentCanobForumKeywordPage, { generateMetadata } from './current-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobForumKeywordPage />;
}
