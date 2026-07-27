import EvoServer2026KeywordPage, { generateMetadata } from './evo-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServer2026KeywordPage />;
}
