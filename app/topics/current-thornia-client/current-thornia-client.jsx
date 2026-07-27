import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-client');
}

export default function CurrentThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-client" />;
}
