import Tibia81CustomMapStatusKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapStatusKeywordPage />;
}
