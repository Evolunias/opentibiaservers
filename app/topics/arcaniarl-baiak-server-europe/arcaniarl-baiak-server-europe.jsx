import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-europe');
}

export default function ArcaniarlBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-europe" />;
}
