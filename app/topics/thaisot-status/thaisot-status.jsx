import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-status');
}

export default function ThaisotStatusKeywordPage() {
  return <StaticKeywordPage slug="thaisot-status" />;
}
