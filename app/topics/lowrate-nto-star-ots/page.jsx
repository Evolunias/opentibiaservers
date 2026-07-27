import LowrateNtoStarOtsKeywordPage, { generateMetadata } from './lowrate-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarOtsKeywordPage />;
}
