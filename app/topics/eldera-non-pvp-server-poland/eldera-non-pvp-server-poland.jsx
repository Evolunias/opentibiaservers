import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-poland');
}

export default function ElderaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-poland" />;
}
