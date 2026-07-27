import FreshStartUnlineOtsKeywordPage, { generateMetadata } from './fresh-start-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineOtsKeywordPage />;
}
