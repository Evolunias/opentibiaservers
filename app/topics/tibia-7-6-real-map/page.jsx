import Tibia76RealMapKeywordPage, { generateMetadata } from './tibia-7-6-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapKeywordPage />;
}
