import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-europe');
}

export default function LowExpClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-europe" />;
}
