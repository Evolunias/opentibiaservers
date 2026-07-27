import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-france');
}

export default function ThorniaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-france" />;
}
