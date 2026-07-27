import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-north-america');
}

export default function HighExpClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-north-america" />;
}
