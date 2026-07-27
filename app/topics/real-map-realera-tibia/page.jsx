import RealMapRealeraTibiaKeywordPage, { generateMetadata } from './real-map-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealeraTibiaKeywordPage />;
}
