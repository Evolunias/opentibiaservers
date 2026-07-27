import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-wars');
}

export default function ShiveraWarsKeywordPage() {
  return <StaticKeywordPage slug="shivera-wars" />;
}
