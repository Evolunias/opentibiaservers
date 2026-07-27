import LowrateMidhemOtsKeywordPage, { generateMetadata } from './lowrate-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemOtsKeywordPage />;
}
