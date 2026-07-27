import RealMapRuthlessChaosKeywordPage, { generateMetadata } from './real-map-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRuthlessChaosKeywordPage />;
}
