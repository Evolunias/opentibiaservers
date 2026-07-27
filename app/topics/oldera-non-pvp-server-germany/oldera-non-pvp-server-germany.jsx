import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-germany');
}

export default function OlderaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-germany" />;
}
