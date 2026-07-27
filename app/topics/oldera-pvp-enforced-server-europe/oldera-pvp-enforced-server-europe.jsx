import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-europe');
}

export default function OlderaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-europe" />;
}
