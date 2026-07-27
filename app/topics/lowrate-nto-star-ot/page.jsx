import LowrateNtoStarOtKeywordPage, { generateMetadata } from './lowrate-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarOtKeywordPage />;
}
