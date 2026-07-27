import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-evolera-server');
}

export default function HighExpEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-evolera-server" />;
}
