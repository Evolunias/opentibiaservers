import Tibia84CustomMapStatusKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapStatusKeywordPage />;
}
