import OfficialZezeniaOnlineForumKeywordPage, { generateMetadata } from './official-zezenia-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineForumKeywordPage />;
}
