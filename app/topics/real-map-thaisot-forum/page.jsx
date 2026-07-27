import RealMapThaisotForumKeywordPage, { generateMetadata } from './real-map-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotForumKeywordPage />;
}
