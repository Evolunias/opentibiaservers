import Tibia1098CustomMapStatusKeywordPage, { generateMetadata } from './tibia-10-98-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098CustomMapStatusKeywordPage />;
}
