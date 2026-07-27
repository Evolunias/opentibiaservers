import NtoStarPvpKeywordPage, { generateMetadata } from './nto-star-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarPvpKeywordPage />;
}
