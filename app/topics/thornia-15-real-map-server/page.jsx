import Thornia15RealMapServerKeywordPage, { generateMetadata } from './thornia-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15RealMapServerKeywordPage />;
}
