import TopMidhemOtsKeywordPage, { generateMetadata } from './top-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemOtsKeywordPage />;
}
