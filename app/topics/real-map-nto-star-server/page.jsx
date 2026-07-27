import RealMapNtoStarServerKeywordPage, { generateMetadata } from './real-map-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarServerKeywordPage />;
}
