import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-baiak-server');
}

export default function Canob76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-baiak-server" />;
}
