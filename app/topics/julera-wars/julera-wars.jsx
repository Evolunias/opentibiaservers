import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-wars');
}

export default function JuleraWarsKeywordPage() {
  return <StaticKeywordPage slug="julera-wars" />;
}
