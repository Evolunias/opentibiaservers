import RealMapMidhemForumKeywordPage, { generateMetadata } from './real-map-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemForumKeywordPage />;
}
