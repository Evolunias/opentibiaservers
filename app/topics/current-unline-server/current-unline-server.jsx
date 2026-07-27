import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-server');
}

export default function CurrentUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="current-unline-server" />;
}
