import OfficialEvoleraForumKeywordPage, { generateMetadata } from './official-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraForumKeywordPage />;
}
