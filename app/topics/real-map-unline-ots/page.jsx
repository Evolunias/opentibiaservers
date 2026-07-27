import RealMapUnlineOtsKeywordPage, { generateMetadata } from './real-map-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineOtsKeywordPage />;
}
