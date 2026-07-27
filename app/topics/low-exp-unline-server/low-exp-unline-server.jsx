import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-unline-server');
}

export default function LowExpUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-unline-server" />;
}
