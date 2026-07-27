import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-server');
}

export default function TopUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="top-unline-server" />;
}
