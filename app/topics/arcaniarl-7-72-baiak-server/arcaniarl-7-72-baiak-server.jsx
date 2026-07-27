import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-baiak-server');
}

export default function Arcaniarl772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-baiak-server" />;
}
