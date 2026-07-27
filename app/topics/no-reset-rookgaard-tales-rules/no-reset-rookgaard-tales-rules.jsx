import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-rules');
}

export default function NoResetRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-rules" />;
}
