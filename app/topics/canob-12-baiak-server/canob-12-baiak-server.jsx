import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-baiak-server');
}

export default function Canob12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-baiak-server" />;
}
