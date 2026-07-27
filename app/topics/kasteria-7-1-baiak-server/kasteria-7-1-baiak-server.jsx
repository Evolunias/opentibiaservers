import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-baiak-server');
}

export default function Kasteria71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-baiak-server" />;
}
