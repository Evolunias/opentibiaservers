import RealMapAmeriaOpenTibiaKeywordPage, { generateMetadata } from './real-map-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaOpenTibiaKeywordPage />;
}
