import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-baiak-server');
}

export default function Canob14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-baiak-server" />;
}
