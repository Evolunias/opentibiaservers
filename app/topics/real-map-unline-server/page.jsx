import RealMapUnlineServerKeywordPage, { generateMetadata } from './real-map-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineServerKeywordPage />;
}
