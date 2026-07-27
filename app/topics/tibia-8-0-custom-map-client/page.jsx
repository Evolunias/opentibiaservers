import Tibia80CustomMapClientKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapClientKeywordPage />;
}
