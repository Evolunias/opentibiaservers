import RealMapClassicusForumKeywordPage, { generateMetadata } from './real-map-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusForumKeywordPage />;
}
