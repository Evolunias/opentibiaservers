import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-unline-server');
}

export default function CustomMapUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-unline-server" />;
}
