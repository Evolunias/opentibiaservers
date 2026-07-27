import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-non-pvp-server-europe');
}

export default function RealeraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-non-pvp-server-europe" />;
}
