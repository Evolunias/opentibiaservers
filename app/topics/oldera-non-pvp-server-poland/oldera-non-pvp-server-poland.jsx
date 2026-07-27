import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-poland');
}

export default function OlderaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-poland" />;
}
