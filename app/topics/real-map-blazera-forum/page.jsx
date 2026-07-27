import RealMapBlazeraForumKeywordPage, { generateMetadata } from './real-map-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraForumKeywordPage />;
}
