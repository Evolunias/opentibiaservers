import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-72-baiak-server');
}

export default function Kasteria772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-72-baiak-server" />;
}
