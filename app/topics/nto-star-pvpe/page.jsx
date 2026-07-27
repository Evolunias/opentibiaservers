import NtoStarPvpeKeywordPage, { generateMetadata } from './nto-star-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarPvpeKeywordPage />;
}
