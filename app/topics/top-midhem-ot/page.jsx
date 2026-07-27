import TopMidhemOtKeywordPage, { generateMetadata } from './top-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemOtKeywordPage />;
}
