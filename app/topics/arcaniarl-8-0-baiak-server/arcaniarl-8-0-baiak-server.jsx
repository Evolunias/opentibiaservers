import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-baiak-server');
}

export default function Arcaniarl80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-baiak-server" />;
}
