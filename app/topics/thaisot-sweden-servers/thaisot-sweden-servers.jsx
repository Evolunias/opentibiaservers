import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-sweden-servers');
}

export default function ThaisotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-sweden-servers" />;
}
