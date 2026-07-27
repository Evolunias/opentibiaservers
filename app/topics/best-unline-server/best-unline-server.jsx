import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-server');
}

export default function BestUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="best-unline-server" />;
}
