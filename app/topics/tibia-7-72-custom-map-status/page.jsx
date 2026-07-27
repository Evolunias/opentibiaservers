import Tibia772CustomMapStatusKeywordPage, { generateMetadata } from './tibia-7-72-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772CustomMapStatusKeywordPage />;
}
