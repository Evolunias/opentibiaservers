import Tibia76CustomMapClientKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapClientKeywordPage />;
}
