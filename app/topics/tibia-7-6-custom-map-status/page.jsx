import Tibia76CustomMapStatusKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapStatusKeywordPage />;
}
