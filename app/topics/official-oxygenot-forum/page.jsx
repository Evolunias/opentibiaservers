import OfficialOxygenotForumKeywordPage, { generateMetadata } from './official-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotForumKeywordPage />;
}
