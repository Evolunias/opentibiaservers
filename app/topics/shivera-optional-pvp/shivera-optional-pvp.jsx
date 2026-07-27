import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-optional-pvp');
}

export default function ShiveraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="shivera-optional-pvp" />;
}
