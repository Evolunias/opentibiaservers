import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria');
}

export default function LowrateXanteriaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria" />;
}
