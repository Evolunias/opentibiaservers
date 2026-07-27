import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-baiak-server');
}

export default function Tibiantis11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-baiak-server" />;
}
