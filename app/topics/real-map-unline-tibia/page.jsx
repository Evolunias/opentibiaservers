import RealMapUnlineTibiaKeywordPage, { generateMetadata } from './real-map-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineTibiaKeywordPage />;
}
