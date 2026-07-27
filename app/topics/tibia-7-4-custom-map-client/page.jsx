import Tibia74CustomMapClientKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapClientKeywordPage />;
}
