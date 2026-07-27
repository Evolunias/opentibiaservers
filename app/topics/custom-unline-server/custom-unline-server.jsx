import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-server');
}

export default function CustomUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-server" />;
}
