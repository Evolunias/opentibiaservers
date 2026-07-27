import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores');
}

export default function BestDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores" />;
}
