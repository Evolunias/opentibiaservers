import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-baiak-server');
}

export default function Arcaniarl96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-baiak-server" />;
}
