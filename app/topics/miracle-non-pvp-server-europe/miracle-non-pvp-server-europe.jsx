import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-non-pvp-server-europe');
}

export default function MiracleNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-non-pvp-server-europe" />;
}
