import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot');
}

export default function ThaisotKeywordPage() {
  return <StaticKeywordPage slug="thaisot" />;
}
