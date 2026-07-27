import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-usa');
}

export default function OlderaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-usa" />;
}
