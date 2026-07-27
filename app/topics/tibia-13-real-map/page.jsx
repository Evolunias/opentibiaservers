import Tibia13RealMapKeywordPage, { generateMetadata } from './tibia-13-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapKeywordPage />;
}
