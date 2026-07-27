import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-evolera-server');
}

export default function LowExpEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-evolera-server" />;
}
