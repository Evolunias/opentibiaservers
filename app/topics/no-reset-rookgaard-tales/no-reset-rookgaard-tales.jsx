import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales');
}

export default function NoResetRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales" />;
}
