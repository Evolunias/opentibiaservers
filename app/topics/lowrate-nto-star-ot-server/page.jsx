import LowrateNtoStarOtServerKeywordPage, { generateMetadata } from './lowrate-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarOtServerKeywordPage />;
}
