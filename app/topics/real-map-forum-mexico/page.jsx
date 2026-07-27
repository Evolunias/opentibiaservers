import RealMapForumMexicoKeywordPage, { generateMetadata } from './real-map-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumMexicoKeywordPage />;
}
