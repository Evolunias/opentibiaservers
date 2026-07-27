import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-unline-server');
}

export default function HighExpUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-unline-server" />;
}
