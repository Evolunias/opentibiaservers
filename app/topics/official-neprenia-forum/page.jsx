import OfficialNepreniaForumKeywordPage, { generateMetadata } from './official-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaForumKeywordPage />;
}
