import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-canada');
}

export default function OlderaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-canada" />;
}
