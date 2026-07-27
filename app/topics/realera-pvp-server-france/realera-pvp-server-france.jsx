import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-france');
}

export default function RealeraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-france" />;
}
