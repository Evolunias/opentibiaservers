import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-baiak-server');
}

export default function Kasteria15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-baiak-server" />;
}
