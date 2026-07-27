import RealMapYurotsOpenTibiaKeywordPage, { generateMetadata } from './real-map-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsOpenTibiaKeywordPage />;
}
