import Tibia86CustomMapStatusKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapStatusKeywordPage />;
}
