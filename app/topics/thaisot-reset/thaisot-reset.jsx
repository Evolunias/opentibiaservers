import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-reset');
}

export default function ThaisotResetKeywordPage() {
  return <StaticKeywordPage slug="thaisot-reset" />;
}
