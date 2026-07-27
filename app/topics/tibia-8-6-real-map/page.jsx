import Tibia86RealMapKeywordPage, { generateMetadata } from './tibia-8-6-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapKeywordPage />;
}
