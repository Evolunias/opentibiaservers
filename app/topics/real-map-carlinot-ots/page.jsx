import RealMapCarlinotOtsKeywordPage, { generateMetadata } from './real-map-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotOtsKeywordPage />;
}
