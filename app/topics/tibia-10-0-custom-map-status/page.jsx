import Tibia100CustomMapStatusKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapStatusKeywordPage />;
}
