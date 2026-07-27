import RealMapMidhemOpenTibiaKeywordPage, { generateMetadata } from './real-map-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemOpenTibiaKeywordPage />;
}
