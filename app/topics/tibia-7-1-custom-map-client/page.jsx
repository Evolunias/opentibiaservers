import Tibia71CustomMapClientKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapClientKeywordPage />;
}
