import CustomMapForumEuropeKeywordPage, { generateMetadata } from './custom-map-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumEuropeKeywordPage />;
}
