import OfficialNtoStarForumKeywordPage, { generateMetadata } from './official-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarForumKeywordPage />;
}
