import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-brazil');
}

export default function OlderaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-brazil" />;
}
