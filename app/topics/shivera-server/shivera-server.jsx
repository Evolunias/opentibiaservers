import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-server');
}

export default function ShiveraServerKeywordPage() {
  return <StaticKeywordPage slug="shivera-server" />;
}
