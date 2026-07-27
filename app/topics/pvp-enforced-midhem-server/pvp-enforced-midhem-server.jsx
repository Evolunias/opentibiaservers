import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-midhem-server');
}

export default function PvpEnforcedMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-midhem-server" />;
}
