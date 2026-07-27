import RealMapAmeriaForumKeywordPage, { generateMetadata } from './real-map-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaForumKeywordPage />;
}
