import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-germany');
}

export default function HighExpClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-germany" />;
}
