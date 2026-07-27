import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-canada');
}

export default function HighExpClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-canada" />;
}
