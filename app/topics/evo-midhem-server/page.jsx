import EvoMidhemServerKeywordPage, { generateMetadata } from './evo-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMidhemServerKeywordPage />;
}
