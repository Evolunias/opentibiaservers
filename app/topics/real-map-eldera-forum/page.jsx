import RealMapElderaForumKeywordPage, { generateMetadata } from './real-map-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaForumKeywordPage />;
}
