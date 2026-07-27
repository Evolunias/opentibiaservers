import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-north-america');
}

export default function OlderaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-north-america" />;
}
