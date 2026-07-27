import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-wars');
}

export default function VineraWarsKeywordPage() {
  return <StaticKeywordPage slug="vinera-wars" />;
}
