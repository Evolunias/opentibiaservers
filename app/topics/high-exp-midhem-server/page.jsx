import HighExpMidhemServerKeywordPage, { generateMetadata } from './high-exp-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpMidhemServerKeywordPage />;
}
