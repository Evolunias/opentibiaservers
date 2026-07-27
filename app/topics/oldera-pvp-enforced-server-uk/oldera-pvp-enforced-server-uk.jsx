import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-uk');
}

export default function OlderaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-uk" />;
}
