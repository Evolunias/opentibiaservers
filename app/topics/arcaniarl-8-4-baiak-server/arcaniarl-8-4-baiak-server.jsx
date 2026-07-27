import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-baiak-server');
}

export default function Arcaniarl84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-baiak-server" />;
}
