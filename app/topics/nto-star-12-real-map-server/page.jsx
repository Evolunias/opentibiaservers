import NtoStar12RealMapServerKeywordPage, { generateMetadata } from './nto-star-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12RealMapServerKeywordPage />;
}
