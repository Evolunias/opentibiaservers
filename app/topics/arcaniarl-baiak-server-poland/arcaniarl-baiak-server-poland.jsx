import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-poland');
}

export default function ArcaniarlBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-poland" />;
}
