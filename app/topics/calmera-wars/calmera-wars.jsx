import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-wars');
}

export default function CalmeraWarsKeywordPage() {
  return <StaticKeywordPage slug="calmera-wars" />;
}
