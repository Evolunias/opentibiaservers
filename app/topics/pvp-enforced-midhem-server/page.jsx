import PvpEnforcedMidhemServerKeywordPage, { generateMetadata } from './pvp-enforced-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedMidhemServerKeywordPage />;
}
