import RealMapClassicusTibiaKeywordPage, { generateMetadata } from './real-map-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusTibiaKeywordPage />;
}
