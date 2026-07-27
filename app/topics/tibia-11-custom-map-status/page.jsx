import Tibia11CustomMapStatusKeywordPage, { generateMetadata } from './tibia-11-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapStatusKeywordPage />;
}
