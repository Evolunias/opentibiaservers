import RealMapKasteriaOpenTibiaKeywordPage, { generateMetadata } from './real-map-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaOpenTibiaKeywordPage />;
}
