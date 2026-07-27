import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-germany-server');
}

export default function ThaisotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-germany-server" />;
}
