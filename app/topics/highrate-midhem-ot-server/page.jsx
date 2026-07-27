import HighrateMidhemOtServerKeywordPage, { generateMetadata } from './highrate-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemOtServerKeywordPage />;
}
