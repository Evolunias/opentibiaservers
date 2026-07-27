import RealMapNtoStarKeywordPage, { generateMetadata } from './real-map-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarKeywordPage />;
}
