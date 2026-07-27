import CustomMapForumMexicoKeywordPage, { generateMetadata } from './custom-map-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapForumMexicoKeywordPage />;
}
