import CurrentNostaltherForumKeywordPage, { generateMetadata } from './current-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherForumKeywordPage />;
}
