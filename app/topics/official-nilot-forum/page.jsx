import OfficialNilotForumKeywordPage, { generateMetadata } from './official-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotForumKeywordPage />;
}
