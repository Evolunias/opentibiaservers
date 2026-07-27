import NtoStarRealMapKeywordPage, { generateMetadata } from './nto-star-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapKeywordPage />;
}
