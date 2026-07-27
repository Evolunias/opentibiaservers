import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-thaisot-server');
}

export default function NonPvpThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-thaisot-server" />;
}
