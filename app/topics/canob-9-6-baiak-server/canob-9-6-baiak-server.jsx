import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-baiak-server');
}

export default function Canob96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-baiak-server" />;
}
