import ActiveNostaltherForumKeywordPage, { generateMetadata } from './active-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherForumKeywordPage />;
}
