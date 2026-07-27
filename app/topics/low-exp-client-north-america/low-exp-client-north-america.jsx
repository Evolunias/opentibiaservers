import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-north-america');
}

export default function LowExpClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-north-america" />;
}
