import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-baiak-server');
}

export default function Arcaniarl100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-baiak-server" />;
}
