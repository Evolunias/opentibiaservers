import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-baiak-server');
}

export default function Tibiantis13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-baiak-server" />;
}
