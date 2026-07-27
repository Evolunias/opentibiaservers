import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-baiak-server');
}

export default function Kasteria100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-baiak-server" />;
}
