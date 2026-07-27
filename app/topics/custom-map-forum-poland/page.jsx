import CustomMapForumPolandKeywordPage, { generateMetadata } from './custom-map-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumPolandKeywordPage />;
}
