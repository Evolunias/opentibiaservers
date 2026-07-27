import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-client');
}

export default function CurrentXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-client" />;
}
