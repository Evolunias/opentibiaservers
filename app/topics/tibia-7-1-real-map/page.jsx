import Tibia71RealMapKeywordPage, { generateMetadata } from './tibia-7-1-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapKeywordPage />;
}
