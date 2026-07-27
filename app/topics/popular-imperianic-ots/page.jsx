import PopularImperianicOtsKeywordPage, { generateMetadata } from './popular-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicOtsKeywordPage />;
}
