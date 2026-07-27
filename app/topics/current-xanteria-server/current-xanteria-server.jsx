import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-server');
}

export default function CurrentXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-server" />;
}
