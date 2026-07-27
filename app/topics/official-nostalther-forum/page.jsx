import OfficialNostaltherForumKeywordPage, { generateMetadata } from './official-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherForumKeywordPage />;
}
