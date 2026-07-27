import Tibia12CustomMapStatusKeywordPage, { generateMetadata } from './tibia-12-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapStatusKeywordPage />;
}
