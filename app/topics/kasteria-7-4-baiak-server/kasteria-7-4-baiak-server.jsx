import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-baiak-server');
}

export default function Kasteria74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-baiak-server" />;
}
