import RealMapClassicusOpenTibiaKeywordPage, { generateMetadata } from './real-map-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusOpenTibiaKeywordPage />;
}
