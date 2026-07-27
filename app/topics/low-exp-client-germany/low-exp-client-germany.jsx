import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-germany');
}

export default function LowExpClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-germany" />;
}
