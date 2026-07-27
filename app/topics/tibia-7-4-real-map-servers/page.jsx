import Tibia74RealMapServersKeywordPage, { generateMetadata } from './tibia-7-4-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapServersKeywordPage />;
}
