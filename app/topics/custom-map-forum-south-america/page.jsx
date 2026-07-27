import CustomMapForumSouthAmericaKeywordPage, { generateMetadata } from './custom-map-forum-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumSouthAmericaKeywordPage />;
}
