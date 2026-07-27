import RealMapRubinotForumKeywordPage, { generateMetadata } from './real-map-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotForumKeywordPage />;
}
