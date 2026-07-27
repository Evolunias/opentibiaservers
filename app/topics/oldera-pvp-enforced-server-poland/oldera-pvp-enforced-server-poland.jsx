import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-poland');
}

export default function OlderaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-poland" />;
}
