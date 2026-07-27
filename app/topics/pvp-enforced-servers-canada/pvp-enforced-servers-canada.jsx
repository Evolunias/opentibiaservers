import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-canada');
}

export default function PvpEnforcedServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-canada" />;
}
