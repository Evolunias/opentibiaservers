import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-poland');
}

export default function RealeraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-poland" />;
}
