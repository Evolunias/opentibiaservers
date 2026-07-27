import Tibia12RealMapKeywordPage, { generateMetadata } from './tibia-12-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapKeywordPage />;
}
