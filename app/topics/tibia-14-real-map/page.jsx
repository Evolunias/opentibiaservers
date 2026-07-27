import Tibia14RealMapKeywordPage, { generateMetadata } from './tibia-14-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapKeywordPage />;
}
