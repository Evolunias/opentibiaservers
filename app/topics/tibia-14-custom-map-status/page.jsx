import Tibia14CustomMapStatusKeywordPage, { generateMetadata } from './tibia-14-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapStatusKeywordPage />;
}
