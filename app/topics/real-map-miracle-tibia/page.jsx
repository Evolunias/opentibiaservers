import RealMapMiracleTibiaKeywordPage, { generateMetadata } from './real-map-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleTibiaKeywordPage />;
}
