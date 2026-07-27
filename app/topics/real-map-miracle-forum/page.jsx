import RealMapMiracleForumKeywordPage, { generateMetadata } from './real-map-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleForumKeywordPage />;
}
