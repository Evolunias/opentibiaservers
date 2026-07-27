import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-poland');
}

export default function HighExpClientPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-poland" />;
}
