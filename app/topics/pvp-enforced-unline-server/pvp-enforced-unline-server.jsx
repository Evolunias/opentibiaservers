import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-unline-server');
}

export default function PvpEnforcedUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-unline-server" />;
}
