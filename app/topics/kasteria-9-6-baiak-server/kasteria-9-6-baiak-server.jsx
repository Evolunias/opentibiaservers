import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-baiak-server');
}

export default function Kasteria96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-baiak-server" />;
}
