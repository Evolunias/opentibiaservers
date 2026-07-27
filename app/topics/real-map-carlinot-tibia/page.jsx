import RealMapCarlinotTibiaKeywordPage, { generateMetadata } from './real-map-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotTibiaKeywordPage />;
}
