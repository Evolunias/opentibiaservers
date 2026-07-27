import TopUnlineOtsKeywordPage, { generateMetadata } from './top-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineOtsKeywordPage />;
}
