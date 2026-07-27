import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-brazil');
}

export default function HighExpClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-brazil" />;
}
