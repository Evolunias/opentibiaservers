import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-baiak-server');
}

export default function Tibiantis854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-baiak-server" />;
}
