import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-brazil');
}

export default function ArcaniarlBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-brazil" />;
}
