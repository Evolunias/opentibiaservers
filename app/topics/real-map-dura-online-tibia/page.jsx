import RealMapDuraOnlineTibiaKeywordPage, { generateMetadata } from './real-map-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineTibiaKeywordPage />;
}
