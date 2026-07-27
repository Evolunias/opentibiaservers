import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-guide');
}

export default function NewXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-guide" />;
}
