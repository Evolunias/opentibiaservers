import OfficialUnlineForumKeywordPage, { generateMetadata } from './official-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineForumKeywordPage />;
}
