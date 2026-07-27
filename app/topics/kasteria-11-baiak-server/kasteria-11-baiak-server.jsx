import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-baiak-server');
}

export default function Kasteria11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-baiak-server" />;
}
