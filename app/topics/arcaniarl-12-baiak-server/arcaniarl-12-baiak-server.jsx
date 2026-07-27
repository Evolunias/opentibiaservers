import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-baiak-server');
}

export default function Arcaniarl12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-baiak-server" />;
}
