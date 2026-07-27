import Tibia1098ServerRealMapKeywordPage, { generateMetadata } from './tibia-10-98-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerRealMapKeywordPage />;
}
