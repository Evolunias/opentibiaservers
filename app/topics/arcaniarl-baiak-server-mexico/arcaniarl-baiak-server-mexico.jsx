import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-mexico');
}

export default function ArcaniarlBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-mexico" />;
}
