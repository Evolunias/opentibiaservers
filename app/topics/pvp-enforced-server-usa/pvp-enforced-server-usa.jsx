import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-usa');
}

export default function PvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-usa" />;
}
