import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-login');
}

export default function CurrentXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-login" />;
}
