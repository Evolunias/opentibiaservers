import RealMapYurotsTibiaKeywordPage, { generateMetadata } from './real-map-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsTibiaKeywordPage />;
}
