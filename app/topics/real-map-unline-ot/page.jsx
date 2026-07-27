import RealMapUnlineOtKeywordPage, { generateMetadata } from './real-map-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineOtKeywordPage />;
}
