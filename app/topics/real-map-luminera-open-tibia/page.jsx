import RealMapLumineraOpenTibiaKeywordPage, { generateMetadata } from './real-map-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraOpenTibiaKeywordPage />;
}
