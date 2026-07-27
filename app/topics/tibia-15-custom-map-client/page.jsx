import Tibia15CustomMapClientKeywordPage, { generateMetadata } from './tibia-15-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapClientKeywordPage />;
}
