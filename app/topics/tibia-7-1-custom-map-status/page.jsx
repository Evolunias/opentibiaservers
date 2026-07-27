import Tibia71CustomMapStatusKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapStatusKeywordPage />;
}
