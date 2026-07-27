import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-poland');
}

export default function RealestaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-poland" />;
}
