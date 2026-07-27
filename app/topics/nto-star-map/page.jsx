import NtoStarMapKeywordPage, { generateMetadata } from './nto-star-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarMapKeywordPage />;
}
