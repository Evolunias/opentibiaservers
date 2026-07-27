import HighrateNostaltherForumKeywordPage, { generateMetadata } from './highrate-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherForumKeywordPage />;
}
