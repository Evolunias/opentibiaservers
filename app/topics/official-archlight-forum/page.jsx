import OfficialArchlightForumKeywordPage, { generateMetadata } from './official-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightForumKeywordPage />;
}
