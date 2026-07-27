import PopularYurotsOtsKeywordPage, { generateMetadata } from './popular-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsOtsKeywordPage />;
}
