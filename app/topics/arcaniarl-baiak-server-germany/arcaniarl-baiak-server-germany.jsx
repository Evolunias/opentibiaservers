import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-germany');
}

export default function ArcaniarlBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-germany" />;
}
