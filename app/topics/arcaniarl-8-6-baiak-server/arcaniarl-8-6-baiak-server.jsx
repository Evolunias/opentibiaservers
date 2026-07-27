import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-baiak-server');
}

export default function Arcaniarl86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-baiak-server" />;
}
