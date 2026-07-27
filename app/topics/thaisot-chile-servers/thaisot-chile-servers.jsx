import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-chile-servers');
}

export default function ThaisotChileServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-chile-servers" />;
}
