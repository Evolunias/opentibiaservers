import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-canada');
}

export default function PvpEnforcedClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-canada" />;
}
