import RealMapCyntaraForumKeywordPage, { generateMetadata } from './real-map-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraForumKeywordPage />;
}
