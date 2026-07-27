import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-uk');
}

export default function LowExpClientUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-uk" />;
}
