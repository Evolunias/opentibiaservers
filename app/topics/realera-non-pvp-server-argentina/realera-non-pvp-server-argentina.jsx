import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-argentina');
}

export default function RealeraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-argentina" />;
}
