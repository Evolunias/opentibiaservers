import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-poland');
}

export default function LowExpClientPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-poland" />;
}
