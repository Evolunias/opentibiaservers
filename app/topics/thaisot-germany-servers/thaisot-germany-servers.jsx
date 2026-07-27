import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-germany-servers');
}

export default function ThaisotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-germany-servers" />;
}
