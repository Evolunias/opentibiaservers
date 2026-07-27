import Tibia80CustomMapStatusKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapStatusKeywordPage />;
}
