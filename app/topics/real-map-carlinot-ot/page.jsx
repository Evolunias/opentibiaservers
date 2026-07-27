import RealMapCarlinotOtKeywordPage, { generateMetadata } from './real-map-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotOtKeywordPage />;
}
