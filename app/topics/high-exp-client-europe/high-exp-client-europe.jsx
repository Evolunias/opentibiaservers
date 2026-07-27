import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-europe');
}

export default function HighExpClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-europe" />;
}
