import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-canada');
}

export default function ArcaniarlBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-canada" />;
}
