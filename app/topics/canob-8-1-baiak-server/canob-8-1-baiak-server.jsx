import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-baiak-server');
}

export default function Canob81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-baiak-server" />;
}
