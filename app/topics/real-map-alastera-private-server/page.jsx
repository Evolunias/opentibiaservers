import RealMapAlasteraPrivateServerKeywordPage, { generateMetadata } from './real-map-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraPrivateServerKeywordPage />;
}
