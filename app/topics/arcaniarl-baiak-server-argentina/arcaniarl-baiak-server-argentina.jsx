import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-argentina');
}

export default function ArcaniarlBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-argentina" />;
}
