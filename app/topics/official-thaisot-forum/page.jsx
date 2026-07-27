import OfficialThaisotForumKeywordPage, { generateMetadata } from './official-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotForumKeywordPage />;
}
