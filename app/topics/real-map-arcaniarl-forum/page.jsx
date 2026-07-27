import RealMapArcaniarlForumKeywordPage, { generateMetadata } from './real-map-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlForumKeywordPage />;
}
