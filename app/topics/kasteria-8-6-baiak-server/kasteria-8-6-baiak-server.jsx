import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-baiak-server');
}

export default function Kasteria86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-baiak-server" />;
}
