import RealMapElderaOpenTibiaKeywordPage, { generateMetadata } from './real-map-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaOpenTibiaKeywordPage />;
}
