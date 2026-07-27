import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-baiak-server');
}

export default function Kasteria13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-baiak-server" />;
}
