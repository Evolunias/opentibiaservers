import Tibia1098RealMapKeywordPage, { generateMetadata } from './tibia-10-98-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RealMapKeywordPage />;
}
