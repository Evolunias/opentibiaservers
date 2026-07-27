import Tibia12CustomMapClientKeywordPage, { generateMetadata } from './tibia-12-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapClientKeywordPage />;
}
