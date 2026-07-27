import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-usa');
}

export default function PvpEnforcedServersUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-usa" />;
}
