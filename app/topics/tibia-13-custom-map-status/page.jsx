import Tibia13CustomMapStatusKeywordPage, { generateMetadata } from './tibia-13-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapStatusKeywordPage />;
}
