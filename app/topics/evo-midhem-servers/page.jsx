import EvoMidhemServersKeywordPage, { generateMetadata } from './evo-midhem-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMidhemServersKeywordPage />;
}
