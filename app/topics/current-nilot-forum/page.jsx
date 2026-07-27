import CurrentNilotForumKeywordPage, { generateMetadata } from './current-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotForumKeywordPage />;
}
