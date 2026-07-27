import NtoStar80RealMapServerKeywordPage, { generateMetadata } from './nto-star-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80RealMapServerKeywordPage />;
}
