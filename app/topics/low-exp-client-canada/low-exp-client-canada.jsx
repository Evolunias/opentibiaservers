import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-canada');
}

export default function LowExpClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-canada" />;
}
