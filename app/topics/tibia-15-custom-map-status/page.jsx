import Tibia15CustomMapStatusKeywordPage, { generateMetadata } from './tibia-15-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapStatusKeywordPage />;
}
