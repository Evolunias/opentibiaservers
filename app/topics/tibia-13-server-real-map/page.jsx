import Tibia13ServerRealMapKeywordPage, { generateMetadata } from './tibia-13-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerRealMapKeywordPage />;
}
