import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-baiak-server');
}

export default function Arcaniarl76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-baiak-server" />;
}
