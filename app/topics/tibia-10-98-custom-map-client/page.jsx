import Tibia1098CustomMapClientKeywordPage, { generateMetadata } from './tibia-10-98-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098CustomMapClientKeywordPage />;
}
