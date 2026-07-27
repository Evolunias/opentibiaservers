import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-ots');
}

export default function CurrentXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-ots" />;
}
