import Tibia14CustomMapClientKeywordPage, { generateMetadata } from './tibia-14-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapClientKeywordPage />;
}
