import RealMapCanobForumKeywordPage, { generateMetadata } from './real-map-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobForumKeywordPage />;
}
