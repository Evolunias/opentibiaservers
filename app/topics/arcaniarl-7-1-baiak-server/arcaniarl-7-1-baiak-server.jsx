import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-baiak-server');
}

export default function Arcaniarl71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-baiak-server" />;
}
