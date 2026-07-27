import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-client');
}

export default function NoResetRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-client" />;
}
