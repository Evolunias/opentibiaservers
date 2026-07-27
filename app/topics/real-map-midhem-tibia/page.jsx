import RealMapMidhemTibiaKeywordPage, { generateMetadata } from './real-map-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemTibiaKeywordPage />;
}
