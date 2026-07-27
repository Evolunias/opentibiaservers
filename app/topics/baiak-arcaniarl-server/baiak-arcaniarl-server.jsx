import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-arcaniarl-server');
}

export default function BaiakArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-arcaniarl-server" />;
}
