import PopularUnlineOtsKeywordPage, { generateMetadata } from './popular-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineOtsKeywordPage />;
}
