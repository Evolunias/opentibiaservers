import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-canada');
}

export default function PvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-canada" />;
}
