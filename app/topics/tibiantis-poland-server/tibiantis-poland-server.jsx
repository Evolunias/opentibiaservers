import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-poland-server');
}

export default function TibiantisPolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-poland-server" />;
}
