import HighrateMidhemServerKeywordPage, { generateMetadata } from './highrate-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemServerKeywordPage />;
}
