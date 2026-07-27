import Tibia100RealMapKeywordPage, { generateMetadata } from './tibia-10-0-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapKeywordPage />;
}
