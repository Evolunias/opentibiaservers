import RealMapAlasteraOtsKeywordPage, { generateMetadata } from './real-map-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraOtsKeywordPage />;
}
