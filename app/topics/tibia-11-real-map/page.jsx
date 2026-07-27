import Tibia11RealMapKeywordPage, { generateMetadata } from './tibia-11-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapKeywordPage />;
}
