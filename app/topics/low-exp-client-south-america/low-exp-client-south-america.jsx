import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-south-america');
}

export default function LowExpClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-south-america" />;
}
