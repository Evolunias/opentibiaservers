import RealMapSaintsotKeywordPage, { generateMetadata } from './real-map-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotKeywordPage />;
}
