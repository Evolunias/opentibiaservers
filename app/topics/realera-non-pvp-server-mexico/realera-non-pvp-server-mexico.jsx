import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-mexico');
}

export default function RealeraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-mexico" />;
}
