import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-north-america');
}

export default function RealestaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-north-america" />;
}
