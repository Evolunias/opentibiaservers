import HighrateMidhemOtsKeywordPage, { generateMetadata } from './highrate-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemOtsKeywordPage />;
}
