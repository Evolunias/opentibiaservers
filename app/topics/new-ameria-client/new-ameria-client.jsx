import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-client');
}

export default function NewAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-client" />;
}
