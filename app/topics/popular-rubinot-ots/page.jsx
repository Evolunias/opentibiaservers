import PopularRubinotOtsKeywordPage, { generateMetadata } from './popular-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotOtsKeywordPage />;
}
