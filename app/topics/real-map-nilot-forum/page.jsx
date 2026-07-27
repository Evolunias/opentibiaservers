import RealMapNilotForumKeywordPage, { generateMetadata } from './real-map-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotForumKeywordPage />;
}
