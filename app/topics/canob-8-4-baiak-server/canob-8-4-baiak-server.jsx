import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-baiak-server');
}

export default function Canob84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-baiak-server" />;
}
