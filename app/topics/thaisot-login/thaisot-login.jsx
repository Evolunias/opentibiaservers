import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-login');
}

export default function ThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="thaisot-login" />;
}
