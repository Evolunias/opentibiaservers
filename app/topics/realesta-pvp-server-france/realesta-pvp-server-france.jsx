import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-france');
}

export default function RealestaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-france" />;
}
