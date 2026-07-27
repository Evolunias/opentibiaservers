import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-baiak-server');
}

export default function Tibiantis81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-baiak-server" />;
}
