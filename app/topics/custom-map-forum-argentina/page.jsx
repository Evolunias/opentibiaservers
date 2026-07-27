import CustomMapForumArgentinaKeywordPage, { generateMetadata } from './custom-map-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumArgentinaKeywordPage />;
}
