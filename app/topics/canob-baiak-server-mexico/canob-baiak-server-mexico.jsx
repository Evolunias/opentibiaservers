import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-mexico');
}

export default function CanobBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-mexico" />;
}
