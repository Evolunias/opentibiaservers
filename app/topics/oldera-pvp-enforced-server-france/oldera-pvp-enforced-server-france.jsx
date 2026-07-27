import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-enforced-server-france');
}

export default function OlderaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-enforced-server-france" />;
}
