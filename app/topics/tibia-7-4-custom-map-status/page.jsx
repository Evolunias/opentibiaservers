import Tibia74CustomMapStatusKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapStatusKeywordPage />;
}
