import RealMapAlasteraForumKeywordPage, { generateMetadata } from './real-map-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraForumKeywordPage />;
}
