import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-guide');
}

export default function NoResetXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-guide" />;
}
