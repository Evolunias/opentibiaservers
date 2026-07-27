import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-enforced-server-france');
}

export default function RealeraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-enforced-server-france" />;
}
