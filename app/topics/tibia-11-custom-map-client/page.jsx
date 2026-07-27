import Tibia11CustomMapClientKeywordPage, { generateMetadata } from './tibia-11-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapClientKeywordPage />;
}
