import NostaltherForumKeywordPage, { generateMetadata } from './nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherForumKeywordPage />;
}
