import RealMapYurotsForumKeywordPage, { generateMetadata } from './real-map-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsForumKeywordPage />;
}
