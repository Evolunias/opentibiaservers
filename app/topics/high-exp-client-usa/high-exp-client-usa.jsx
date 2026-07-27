import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-usa');
}

export default function HighExpClientUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-usa" />;
}
