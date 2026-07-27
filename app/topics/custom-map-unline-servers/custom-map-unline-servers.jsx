import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-unline-servers');
}

export default function CustomMapUnlineServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-unline-servers" />;
}
