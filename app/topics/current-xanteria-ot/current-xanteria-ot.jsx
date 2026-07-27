import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-ot');
}

export default function CurrentXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-ot" />;
}
