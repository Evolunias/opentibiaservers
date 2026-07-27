import LowrateMidhemOtServerKeywordPage, { generateMetadata } from './lowrate-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemOtServerKeywordPage />;
}
