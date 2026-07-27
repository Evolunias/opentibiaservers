import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-usa-server');
}

export default function ThaisotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-usa-server" />;
}
