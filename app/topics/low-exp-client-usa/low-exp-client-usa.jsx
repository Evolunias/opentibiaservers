import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-usa');
}

export default function LowExpClientUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-usa" />;
}
