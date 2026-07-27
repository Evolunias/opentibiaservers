import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-server');
}

export default function ActiveUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="active-unline-server" />;
}
