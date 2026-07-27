import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-usa-servers');
}

export default function ThaisotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-usa-servers" />;
}
