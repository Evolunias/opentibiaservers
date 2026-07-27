import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-baiak-server');
}

export default function Arcaniarl15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-baiak-server" />;
}
