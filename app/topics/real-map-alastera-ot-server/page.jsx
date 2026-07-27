import RealMapAlasteraOtServerKeywordPage, { generateMetadata } from './real-map-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraOtServerKeywordPage />;
}
