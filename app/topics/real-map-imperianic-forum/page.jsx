import RealMapImperianicForumKeywordPage, { generateMetadata } from './real-map-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicForumKeywordPage />;
}
