import Tibia80RealMapKeywordPage, { generateMetadata } from './tibia-8-0-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapKeywordPage />;
}
