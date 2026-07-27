import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-uk');
}

export default function HighExpClientUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-uk" />;
}
