import RealMapAlasteraClientKeywordPage, { generateMetadata } from './real-map-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraClientKeywordPage />;
}
