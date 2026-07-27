import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-baiak-server');
}

export default function Kasteria12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-baiak-server" />;
}
