import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-open-pvp');
}

export default function ShiveraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="shivera-open-pvp" />;
}
