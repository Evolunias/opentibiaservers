import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-evolera-servers');
}

export default function CustomMapEvoleraServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-evolera-servers" />;
}
