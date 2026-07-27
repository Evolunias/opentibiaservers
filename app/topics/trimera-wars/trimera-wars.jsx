import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-wars');
}

export default function TrimeraWarsKeywordPage() {
  return <StaticKeywordPage slug="trimera-wars" />;
}
