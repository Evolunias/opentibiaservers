import LowrateMidhemOtKeywordPage, { generateMetadata } from './lowrate-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemOtKeywordPage />;
}
