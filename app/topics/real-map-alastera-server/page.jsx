import RealMapAlasteraServerKeywordPage, { generateMetadata } from './real-map-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraServerKeywordPage />;
}
