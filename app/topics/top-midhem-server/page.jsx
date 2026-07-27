import TopMidhemServerKeywordPage, { generateMetadata } from './top-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemServerKeywordPage />;
}
