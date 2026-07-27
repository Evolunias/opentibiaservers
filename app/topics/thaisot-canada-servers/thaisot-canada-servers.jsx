import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-canada-servers');
}

export default function ThaisotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-canada-servers" />;
}
