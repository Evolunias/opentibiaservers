import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-baiak-server');
}

export default function Kasteria81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-baiak-server" />;
}
