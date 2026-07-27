import CustomMapForumUkKeywordPage, { generateMetadata } from './custom-map-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumUkKeywordPage />;
}
