import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-usa');
}

export default function PvpEnforcedClientUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-usa" />;
}
