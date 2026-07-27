import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-uk');
}

export default function ArcaniarlBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-uk" />;
}
