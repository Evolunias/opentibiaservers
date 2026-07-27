import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-baiak-server');
}

export default function Canob15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-baiak-server" />;
}
