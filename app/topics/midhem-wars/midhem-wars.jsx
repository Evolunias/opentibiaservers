import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-wars');
}

export default function MidhemWarsKeywordPage() {
  return <StaticKeywordPage slug="midhem-wars" />;
}
