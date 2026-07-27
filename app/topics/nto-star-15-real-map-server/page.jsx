import NtoStar15RealMapServerKeywordPage, { generateMetadata } from './nto-star-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15RealMapServerKeywordPage />;
}
