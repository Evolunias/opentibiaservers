import RealMapNilotTibiaKeywordPage, { generateMetadata } from './real-map-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotTibiaKeywordPage />;
}
