import NtoStar13RealMapServerKeywordPage, { generateMetadata } from './nto-star-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13RealMapServerKeywordPage />;
}
