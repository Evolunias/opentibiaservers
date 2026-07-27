import Tibia13CustomMapClientKeywordPage, { generateMetadata } from './tibia-13-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapClientKeywordPage />;
}
