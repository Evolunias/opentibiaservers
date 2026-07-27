import Midhem15RealMapServerKeywordPage, { generateMetadata } from './midhem-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15RealMapServerKeywordPage />;
}
