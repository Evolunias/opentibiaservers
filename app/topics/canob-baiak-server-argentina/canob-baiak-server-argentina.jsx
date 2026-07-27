import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-argentina');
}

export default function CanobBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-argentina" />;
}
