import HighrateNtoStarOtServerKeywordPage, { generateMetadata } from './highrate-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarOtServerKeywordPage />;
}
