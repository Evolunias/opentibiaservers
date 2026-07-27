import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-usa');
}

export default function RealeraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-usa" />;
}
