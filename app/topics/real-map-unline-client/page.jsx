import RealMapUnlineClientKeywordPage, { generateMetadata } from './real-map-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineClientKeywordPage />;
}
