import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-baiak-server');
}

export default function Arcaniarl14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-baiak-server" />;
}
