import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-south-america');
}

export default function HighExpClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-south-america" />;
}
