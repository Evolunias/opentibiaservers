import RealMapTibiaoriginsTibiaKeywordPage, { generateMetadata } from './real-map-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaoriginsTibiaKeywordPage />;
}
