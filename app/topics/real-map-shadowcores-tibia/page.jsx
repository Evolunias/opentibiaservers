import RealMapShadowcoresTibiaKeywordPage, { generateMetadata } from './real-map-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresTibiaKeywordPage />;
}
