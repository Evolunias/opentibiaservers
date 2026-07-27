import RealMapArchlightTibiaKeywordPage, { generateMetadata } from './real-map-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightTibiaKeywordPage />;
}
