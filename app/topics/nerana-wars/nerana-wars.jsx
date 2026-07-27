import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-wars');
}

export default function NeranaWarsKeywordPage() {
  return <StaticKeywordPage slug="nerana-wars" />;
}
