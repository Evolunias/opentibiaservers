import Tibia772CustomMapClientKeywordPage, { generateMetadata } from './tibia-7-72-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772CustomMapClientKeywordPage />;
}
