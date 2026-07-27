import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-argentina');
}

export default function LowExpClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-argentina" />;
}
