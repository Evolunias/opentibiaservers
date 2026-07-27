import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-europe');
}

export default function ElderaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-europe" />;
}
