import Tibia96CustomMapClientKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapClientKeywordPage />;
}
