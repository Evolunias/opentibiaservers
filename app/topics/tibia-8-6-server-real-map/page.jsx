import Tibia86ServerRealMapKeywordPage, { generateMetadata } from './tibia-8-6-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerRealMapKeywordPage />;
}
