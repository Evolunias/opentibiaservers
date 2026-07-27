import RealMapNtoStarOtKeywordPage, { generateMetadata } from './real-map-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarOtKeywordPage />;
}
