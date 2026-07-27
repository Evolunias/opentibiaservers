import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria');
}

export default function CurrentXanteriaKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria" />;
}
