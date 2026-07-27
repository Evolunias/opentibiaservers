import NtoStar84RealMapServerKeywordPage, { generateMetadata } from './nto-star-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84RealMapServerKeywordPage />;
}
