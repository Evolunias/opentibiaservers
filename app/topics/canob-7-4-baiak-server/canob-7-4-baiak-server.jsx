import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-baiak-server');
}

export default function Canob74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-baiak-server" />;
}
