import Tibia74RealMapClientKeywordPage, { generateMetadata } from './tibia-7-4-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapClientKeywordPage />;
}
