import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-baiak-server');
}

export default function Arcaniarl13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-baiak-server" />;
}
