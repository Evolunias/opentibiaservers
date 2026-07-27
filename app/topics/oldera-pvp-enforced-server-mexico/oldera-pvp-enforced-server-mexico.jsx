import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-mexico');
}

export default function OlderaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-mexico" />;
}
