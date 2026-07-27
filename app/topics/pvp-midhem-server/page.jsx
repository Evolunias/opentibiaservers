import PvpMidhemServerKeywordPage, { generateMetadata } from './pvp-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpMidhemServerKeywordPage />;
}
