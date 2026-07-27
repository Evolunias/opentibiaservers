import Tibia84RealMapKeywordPage, { generateMetadata } from './tibia-8-4-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapKeywordPage />;
}
