import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-france');
}

export default function RealestaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-france" />;
}
