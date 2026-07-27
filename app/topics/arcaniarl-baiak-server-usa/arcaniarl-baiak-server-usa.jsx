import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-usa');
}

export default function ArcaniarlBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-usa" />;
}
