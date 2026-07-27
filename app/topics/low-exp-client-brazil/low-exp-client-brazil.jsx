import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-brazil');
}

export default function LowExpClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-brazil" />;
}
