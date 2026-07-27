import RealMapForumCanadaKeywordPage, { generateMetadata } from './real-map-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapForumCanadaKeywordPage />;
}
