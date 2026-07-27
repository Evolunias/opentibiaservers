import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-world');
}

export default function ShiveraWorldKeywordPage() {
  return <StaticKeywordPage slug="shivera-world" />;
}
