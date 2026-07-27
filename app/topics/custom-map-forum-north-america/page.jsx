import CustomMapForumNorthAmericaKeywordPage, { generateMetadata } from './custom-map-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumNorthAmericaKeywordPage />;
}
